const fetch = require("node-fetch")

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    console.log('working yusssss');
    let data = await fetch('https://us-central1-moscowjobscraper.cloudfunctions.net/getMeterData')
    let nodeContent = await data.json()
    
    
    nodeContent.forEach((node) => {
        createNode({
            ...node,
            id: createNodeId(`${node.jobLink}`),
            parent: null,
            children: [],
            internal: {
                type: `meter`,
                content: JSON.stringify(node),
                contentDigest: createContentDigest(node),
            }
        })
    })
}