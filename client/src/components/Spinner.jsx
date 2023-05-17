import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <HashLoader color="red" loading={true} size={50} />
    </div>
  );
};

export default Spinner;

/*
<div className="d-flex justify-content-center spinner">
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading.....</span>
    </div>
</div>
*/
