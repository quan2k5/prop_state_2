import React, { Component } from 'react';
interface IPost {
    id: number,
    title: string,
    author: string,
    content: string
}
type IProps= {
    posts: IPost[];
}

export default class ListPost extends Component {
    public state: { posts: IPost[] };
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [
                {
                    id: Math.floor(Math.random() * 10000000),
                    title: 'dnxf',
                    author: 'QUAN le',
                    content: 'Hýddf'
                },
                {
                    id: Math.floor(Math.random() * 10000000),
                    title: 'sdf',
                    author: 'sdfg',
                    content: 'dftgyhg'
                }
            ]
        }

    }
    render() {
        return (
            <>
                <Post posts={this.state.posts}></Post>
            </>
        )
    }
}
class Post extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        const { posts } = this.props;
        return (
            <>
                {posts.map(post => (
                    <ul key={post.id}>
                        <li>Tiêu đề: {post.title}</li>
                        <li>Tác Giả: {post.author}</li>
                        <li>Nội Dung: {post.content}</li>
                    </ul>
                ))}
            </>
        )
    }
}
