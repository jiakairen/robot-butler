import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you have succesufly subscribed to our News Letter . 
        Guess what ?? you are getting 10% off on any of our products 
        Enjoyyyyyyyy!!
      </p>
      <hr />
      <p className="mb-0">
        Thank you 
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;