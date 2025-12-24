function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink/20 via-cream to-turquoise/20">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-6xl font-black text-dark">
          {statusCode || 'Error'}
        </h1>
        <p className="text-dark/70 text-lg">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 rounded-2xl bg-turquoise text-white font-semibold hover:bg-pink transition-colors"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;


