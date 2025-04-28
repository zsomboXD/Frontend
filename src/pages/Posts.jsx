import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { CardsContainer } from '../components/CardsContainer';
import { readPosts } from '../utility/crudUtility';
import { useSearchParams, Link } from 'react-router-dom';
import { CategContext } from '../context/CategContext';
import { Categories1 } from '../components/Categories1';
import { SearchBox } from '../components/SearchBox';
import { BarLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/Header';

export const Posts = () => {
  const [searchParams] = useSearchParams();
  const { categories1 } = useContext(CategContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selCateg, setSelCateg] = useState(searchParams.get('ctg') ? [searchParams.get('ctg')] : []);

  useEffect(() => {
    setLoading(true);
    try {
      readPosts(setPosts, selCateg); 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, [selCateg]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelCateg(prev => checked ? [...prev, value] : prev.filter(categ => categ !== value));
  };

  return (

    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      paddingTop: '80px',
      color: 'white'
    }}>
          <Header />
      <div className="position-relative" style={{ height: '40vh', overflow: 'hidden' }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
        
        <div 
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            padding: '2rem',
          }}
        >
          <h1 className="fw-bold mb-4" 
              style={{ 
                fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                lineHeight: '1.2'
              }}>
            Explore WorkoutWise Posts
          </h1>
          <p className="mb-4" 
             style={{ 
               fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
               maxWidth: '800px',
               lineHeight: '1.6'
             }}>
            Discover workout routines, training tips, and fitness inspiration from our community.
          </p>
        </div>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col lg={10} xl={8}>
            <Card style={{
              backgroundColor: '#1a1a1a',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              marginTop: '-80px',
              position: 'relative',
              zIndex: 2
            }}>
              <CardBody className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon icon={faFilter} className="me-2" style={{ color: '#4CAF50', fontSize: '1.5rem' }} />
                  <h2 className="mb-0" style={{ color: '#4CAF50' }}>Filter Posts</h2>
                </div>
                <div className="mb-4">
                  <h5 className="mb-3" style={{ color: '#cccccc' }}>By Category:</h5>
                  <Categories1 
                    categories1={categories1} 
                    selCateg={selCateg} 
                    setSelCateg={setSelCateg} 
                    handleChange={handleChange}
                  />
                </div>

                {posts.length > 0 && (
                  <div className="mt-4">
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faSearch} className="me-2" style={{ color: '#2196F3', fontSize: '1.2rem' }} />
                      <h5 style={{ color: '#cccccc', marginBottom: 0 }}>Search Posts:</h5>
                    </div>
                    <SearchBox 
                      items={posts.map(obj => ({ id: obj.id, name: obj.title }))} 
                      darkMode={true}
                    />
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {loading && (
          <div className="text-center my-5">
            <BarLoader color="#4CAF50" width="100px" height="8px" />
            <p className="mt-2" style={{ color: '#cccccc' }}>Loading posts...</p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h2 className="mb-4" style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              color: '#ffffff',
              borderBottom: '2px solid #4CAF50',
              paddingBottom: '0.5rem',
              display: 'inline-block'
            }}>
              Latest Posts
            </h2>
            <CardsContainer posts={posts} />
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-5" style={{ marginTop: '2rem' }}>
            <div className="p-5" style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>No posts found</h3>
              <p className="mb-4" style={{ color: '#cccccc' }}>Try adjusting your filters or create a new post</p>
              <Link to="/create-post">
                <Button color="success" className="px-4 py-2">
                  Create New Post
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};