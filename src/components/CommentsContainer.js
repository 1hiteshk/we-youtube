import React from "react";

// comments data for nested comments or structure of list , array, each comment is object
// each comment can have a multiple reply
const commentsData = [
  {
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [],
  },
  /*2*/{
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [
      {
        name: "akshay saini",
        text: "lorem ipsum to he functionality of eventloop",
        replies: [],
      },
 /*2.2*/      {
        name: "akshay saini",
        text: "lorem ipsum to he functionality of eventloop",
        replies: [
 /*2.2.1*/          {
            name: "akshay saini",
            text: "lorem ipsum to he functionality of eventloop",
            replies: [
 /*2.2.1.1*/              {
                name: "akshay saini",
                text: "lorem ipsum to he functionality of eventloop",
                replies: [
/*2.2.1.1.2*/                  {
                    name: "akshay saini",
                    text: "lorem ipsum to he functionality of eventloop",
                    replies: [
                        {
                            name: "akshay saini",
                            text: "lorem ipsum to he functionality of eventloop",
                            replies: [],
                          },
                    ],
                  },
                  {
                    name: "akshay saini",
                    text: "lorem ipsum to he functionality of eventloop",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [],
  },
  {
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [],
  },
  {
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [],
  },
  {
    name: "akshay saini",
    text: "lorem ipsum to he functionality of eventloop",
    replies: [],
  },
];

//********for displaying 1 comment ****************************/
const Comment = ({data}) => {
    const {name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 ">
        <img className="h-12 w-12" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"alt="user-male-circle"/>
        <div className="px-3">
            {/* <h1>{data?.name}</h1> */}
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
      </div>
    )
}

const CommentsList = ({comments}) => {  // will pass here list of comments whole comments which will render
    return ( comments.map((comment,index) => (
        <div>
            <Comment key={index}  data={comment} />
            {/************ replies of a comment, is a list comments ,any no. of replies ,N-level nesting****************/}
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}/>       {/* replies=> recursion in components, data passed is comment.replies */}
          </div>
        </div>
            
    ))
    )
}


// ************************CommentsContainer which is calling other fn. *********************** ***//
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
      {/* < Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;
