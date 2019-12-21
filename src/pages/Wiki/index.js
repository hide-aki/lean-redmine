import React, { useState, useEffect } from 'react';
import { Icon, Tree } from 'antd';
import api from '../../services/api';
import textile from 'textile-js';

import wiki from './test/wiki';
import index from './test/index';

export default function Wiki() {

    const [pagesList, setPagesList] = useState([]);
    const [currentPageContent, setCurrentPageContent] = useState(wiki.wiki_page);
    const [wikiTree, setWikiTree] = useState([]);

    const { TreeNode } = Tree;

    const treeNodes = [ { key: 0, title: "Wiki", children: [{ key: 1, title: "História", selectable: true }], selectable: true }   ];

    useEffect(() => {

        async function loadPagesList() {

            const responsePagesList = await api({
              method: 'get',
              url: '/projects/edufes/wiki/index.json',

              params: { limit: 100},
              headers: {
                  'X-Redmine-API-Key': localStorage.getItem('redmineApiKey'),
                  "Access-Control-Allow-Headers" : "*",
                  'Cache-Control': 'max-age<10>',
                  'Content-Type': 'application/json'}

            });

            setPagesList(responsePagesList.data);
        
        }
        setPagesList(index.wiki_pages);
      //  loadPagesList();
    
    }, []);

    useEffect(() => {
        
        function loadTree() {

            const tree = pagesList.map((page, index) => {

                if (!page.parent) {

                    return { 
                        key: index.toString(),
                        title: page.title,
                        selectable: true,
                        children: pagesList.map((childrenPage, childrenIndex) => { 
                        
                            if (childrenPage.parent && childrenPage.parent.title === page.title ) {

                                return {
                                    key: index.toString() + "-" + childrenIndex.toString(),
                                    title: childrenPage.title,
                                    selectable: true,
                                    children: pagesList.map((grandchildrenPage, grandchildrenIndex) => { 

                       
                                        if (grandchildrenPage.parent && grandchildrenPage.parent.title === childrenPage.title ) {
            
                                            return {
                                                key: index.toString() + "-" + childrenIndex.toString() + "-" + grandchildrenIndex.toString(),
                                                title: grandchildrenPage.title,
                                                selectable: true 
                                            } 

                                        } else {
                                            
                                            return undefined
                                        
                                        } 
                                
                                    }).filter(page => page !== undefined)
                                
                                };
                                
                        
                            } else {
                                            
                                return undefined
                            
                            } 
                        
                        }).filter(page => page !== undefined)
                        
                    }
                
                } else {
                                            
                    return undefined
                
                }
            
            }).filter(page => page !== undefined);

            setWikiTree(tree);

        }

        loadTree();

    }, [pagesList]);
console.log(wikiTree);
    return (

        <div style={{width: '100%', display: 'flex'}}>
            <div className='wiki-sidebar' style={{width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Tree
                    switcherIcon={<Icon type="down" />}
                    defaultExpandedKeys={['0-0']}
                    onSelect={() => setCurrentPageContent()}
                    treeData={wikiTree}
                    style={{margin: '50px'}}
                
                />
            </div>
            <div className='wiki-content' style={{width: '100%', padding: '50px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff'}}>
                <div style={{maxWidth: '800px'}} dangerouslySetInnerHTML={{ __html: textile(currentPageContent.text) }} />
            </div>
        </div>
    
    )

}
