import React from 'react';

const Test = ({match}) => {
    
    return <h1>Hi i am from test {match.params.postId}</h1>
    
};



export default Test;