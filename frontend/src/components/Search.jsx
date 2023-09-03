import {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'


const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen width when the component mounts
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const marginStyle = {
    marginTop: isSmallScreen ? '15px' : '0',
    marginBottom: isSmallScreen ? '15px' : '0',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword('');
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} style={marginStyle} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
      ></Form.Control>
      <Button type='submit' variant='outline-light' className='p-2' mx-2>
        Search
      </Button>
    </Form>
  );
};

export default Search;