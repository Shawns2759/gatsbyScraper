// const fetch = require("node-fetch")

// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//     const { createNode } = actions
//     console.log('working yusssss');
//     let data = await fetch('https://us-central1-moscowjobscraper.cloudfunctions.net/getMeterData')
//     let nodeContent = await data.json()
    
    
//     nodeContent.forEach((node) => {
//         createNode({
//             ...node,
//             id: createNodeId(`${node.jobLink}`),
//             parent: null,
//             children: [],
//             internal: {
//                 type: `meter`,
//                 content: JSON.stringify(node),
//                 contentDigest: createContentDigest(node),
//             }
//         })
//     })
// }

const fetch = require("node-fetch")

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    console.log('working yusssss');
   
    
    let meterData = await fetch('https://us-central1-moscowjobscraper.cloudfunctions.net/getMeterData')
    let redBalloonData = await fetch('https://us-central1-moscowjobscraper.cloudfunctions.net/getRedballoonData')
    let emsiData = await fetch('https://us-central1-moscowjobscraper.cloudfunctions.net/getEmsiData')
    
    let emsi = await emsiData.json()
    let meter = await meterData.json()
    let redBalloon = await redBalloonData.json()

    const allJobs = {
        emsi, 
        meter, 
        redBalloon
}
    console.log(allJobs);

    emsi.forEach((node) => {
        createNode({
            ...node,
            id: createNodeId(`${node.jobLink}`),
            parent: null,
            children: [],
            internal: {
                type: `emsiJobs`,
                content: JSON.stringify(node),
                contentDigest: createContentDigest(node),
            }
        })
    })
console.log(1);

meter.forEach((node) => {
    createNode({
        ...node,
        id: createNodeId(`${node.jobLink}`),
        parent: null,
        children: [],
        internal: {
            type: `meterJobs`,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node),
        }
    })
})

console.log(2);
redBalloon.forEach((node) => {
    createNode({
        ...node,
        id: createNodeId(`${node.jobLink}`),
        parent: null,
        children: [],
        internal: {
            type: `redballoonJobs`,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node),
        }
    })
})
    
console.log(3);
}
