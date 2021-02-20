import { useRouter } from "next/router";
import { getMovieById } from "../../actions";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" role="button">
            Learn more
          </a>
        </p>
      </div>
      <p style={{ fontSize: "21px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default Movie;
