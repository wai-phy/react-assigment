import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfo.length > 0 ? (
        <>
          {props.userInfo.map((info) => {
            return (
              <Card css={"card-mt"} key={info.name}>
                <div>
                  <p>Name : {info.name}</p>
                  <p>From : {info.live}</p>
                  <p>Email : {info.email}</p>
                </div>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Card css={"card-mt"}><p>No User Available!!</p></Card>
        </>
      )}
    </>
  );
};

export default List;
