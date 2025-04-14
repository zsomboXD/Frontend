import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Categories } from '../components/Categories';
import { CardsContainer } from '../components/CardsContainer';
import { readPosts } from '../utility/crudUtility';
import { useSearchParams } from 'react-router-dom';
import { CategContext } from '../context/CategContext';
import { SearchBox } from '../components/SearchBox';

export const Posts = () => {
  const [searchParams] = useSearchParams();
  const { categories } = useContext(CategContext);
  const [posts, setPosts] = useState([]);
  const [selCateg, setSelCateg] = useState(searchParams.get('ctg') ? [searchParams.get('ctg')] : []);

  useEffect(() => {
    readPosts(setPosts, selCateg);
  }, [selCateg]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelCateg(prev => checked ? [...prev, value] : prev.filter(categ => categ !== value));
  };

  return (
    <div className="page">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '12rem' }}>
        <Row className="text-center">
          <Col md={12}>
            <Card className="p-4">
              <Categories 
                categories={categories} 
                selCateg={selCateg} 
                setSelCateg={setSelCateg} 
                handleChange={handleChange}
              />
              {posts && (
                <div className="z-10 mt-3">
                  <SearchBox items={posts.map(obj => ({ id: obj.id, name: obj.title }))} />
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>

      <CardsContainer posts={posts} />
    </div>
  );
};
