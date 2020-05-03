// Dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import BlogPost from '../BlogPost/BlogPost';

// Declare Blog as functional component
export default function Blog(props) {
    const [page, setPage] = useState(1);
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        axios
            .get('/api/blog/totalPosts')
            .then(res => {
                setPostCount(res.data.postCount);
            });
    }, []);

    const clickHandler = (val) => {
        let newPage = page + val;

        if (newPage < 1){
            setPage(1);
        } else if (newPage > postCount / 10 + 1){
            setPage(Math.floor(postCount / 10) + 1);
        } else{
            setPage(newPage);
        }
    }

    const PageNav = styled.nav``;
    const PageButton = styled.button``;

    return (
        <div>
            <PageNav>
                <PageButton onClick={() => clickHandler(-1)}>
                    Previous
                </PageButton>
                <span>
                    {page}
                </span>
                <PageButton onClick={() => clickHandler(1)}>
                    Next
                </PageButton>
            </PageNav>
            <BlogPost id={0 + 10 *  (page - 1)} summary />
            <BlogPost id={1 + 10 *  (page - 1)} summary />
            <BlogPost id={2 + 10 *  (page - 1)} summary />
            <BlogPost id={3 + 10 *  (page - 1)} summary />
            <BlogPost id={4 + 10 *  (page - 1)} summary />
            <BlogPost id={5 + 10 *  (page - 1)} summary />
            <BlogPost id={6 + 10 *  (page - 1)} summary />
            <BlogPost id={7 + 10 *  (page - 1)} summary />
            <BlogPost id={8 + 10 *  (page - 1)} summary />
            <BlogPost id={9 + 10 *  (page - 1)} summary />
        </div>
    );
}