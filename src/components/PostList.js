import React, { Component } from "react";
import Post from "./PostItem";
import "../App.css";
import hiraAvatar from "../assets/hira.jpg";
import path from "path";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Gabriel Hirakawa",
          avatar:
            "https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/60359296_2775861909155878_5408918857228222464_n.jpg?_nc_cat=101&_nc_oc=AQmh0-LR6ioBTBF7HoM71tPAT_eJlC5W202_pFCjrqEWjUvXDYKlqvY_rNFqXqHNl9k&_nc_ht=scontent.fgru6-1.fna&oh=0a12a206ac8c9bfa76d56c5d84a2abdc&oe=5E061AAB"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém precisando de parceiro de jornada?",
        comments: [
          {
            id: 1,
            author: {
              name: "Elvin Ciqueira",
              avatar:
                "https://avatars0.githubusercontent.com/u/42623554?s=400&v=4"
            },
            content: "E ai, supimpa? Vamos ser a dupla dinamite?"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Hideki",
          avatar: "https://avatars0.githubusercontent.com/u/32941241?s=400&v=4"
        },
        date: "03 Jun 2019",
        content:
          "Galera, alguém sabe como implementar um contador em javascript? Estou criando uma landing page de um projeto e precisava de algo dinâmico na minha página ",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel Hirakawa",
              avatar:
                "https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/60359296_2775861909155878_5408918857228222464_n.jpg?_nc_cat=101&_nc_oc=AQmh0-LR6ioBTBF7HoM71tPAT_eJlC5W202_pFCjrqEWjUvXDYKlqvY_rNFqXqHNl9k&_nc_ht=scontent.fgru6-1.fna&oh=0a12a206ac8c9bfa76d56c5d84a2abdc&oe=5E061AAB"
            },
            content:
              "Acredito que dê para fazer com a função 'setInterval' do javascript"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postlist">
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </ul>
      </div>
    );
  }
}
export default PostList;
