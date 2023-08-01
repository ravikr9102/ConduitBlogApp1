import React from 'react';
import { Link } from 'react-router-dom';
import { articlesURL } from '../utils/constant';

class Post extends React.Component{
  constructor(props){
    super(props)
  }

  // handleFavourite = () => {
  //   let { favouritesCount, slug } = this.props;
  //   fetch(articlesURL + "/" + slug + "/favorite", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Token ${this.props.user.token}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Cannot Favourite the article");
  //       }
  //       return res.json();
  //     })
  //     .then(({ article }) => favouritesCount + 1);
  //   fetch(articlesURL + "/" + slug + "/favorite", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Token ${this.props.user.token}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Cannot Favourite the article");
  //       }
  //       return res.json();
  //     })
  //     .then(({ article }) => favouritesCount - 1);
  // };
  render(){
    const {
      author,
      createdAt,
      title,
      description,
      slug,
      tagList,
      favoritesCount,
    } = this.props;
    return(
      <article className="px-12 py-5 border-t-2">
      <header className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src={author.image}
            alt={author.username}
          />
          <div className="ml-2">
            <strong className="block font-normal text-green-500">
              {author.username}
            </strong>
            <strong className="block font-normal text-gray-500">
              {String(new Date(createdAt)).slice(0, 16)}
            </strong>
          </div>
        </div>
        <div>
          <button className="border border-green-500 text-green-500 px-2 rounded-sm py-1 hover:bg-green-500 hover:text-white">
            {favoritesCount === 0 ? '♡ 0' : '♥' + favoritesCount}
          </button>
        </div>
      </header>
      <Link to={`/articles/${slug}`}>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2 mb-4 text-lg text-gray-600">{description}</p>
      </Link>
      <Link
        className="text-blue-700 hover:text-green-500"
        to={`/articles/${slug}`}
      >
        Read More...
      </Link>
      <ul className="flex justify-end">
        {tagList.map((tag) => (
          <li className="border-2 px-3 rounded-2xl py-1 mx-1" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
    )
  }
}
export default Post;
