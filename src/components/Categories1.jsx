import React, { useContext } from 'react';
import { CategContext } from '../context/CategContext';
import { FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Categories1 = ({ selCateg, setSelCateg }) => {
  const { categories1 } = useContext(CategContext);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelCateg(prev => checked ? [...prev, value] : prev.filter(categ => categ !== value));
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: '0.5rem'
    }}>
      {categories1 && categories1.map(obj => (
        <FormGroup check key={obj.id} style={{ margin: 0 }}>
          <Input 
            type="checkbox" 
            id={`category-${obj.id}`}
            value={obj.name} 
            onChange={handleChange}
            checked={selCateg.includes(obj.name)}
            style={{
              position: 'absolute',
              opacity: 0,
              height: 0,
              width: 0
            }}
          />
          <Label 
            check 
            htmlFor={`category-${obj.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              backgroundColor: selCateg.includes(obj.name) ? '#4CAF50' : '#2a2a2a',
              color: selCateg.includes(obj.name) ? 'white' : '#cccccc',
              border: `1px solid ${selCateg.includes(obj.name) ? '#4CAF50' : '#444'}`,
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              fontWeight: '500',
              '&:hover': {
                backgroundColor: '#3a3a3a'
              }
            }}
          >
            {selCateg.includes(obj.name) && (
              <FontAwesomeIcon 
                icon={faCheck} 
                style={{ 
                  marginRight: '0.5rem',
                  fontSize: '0.8rem'
                }} 
              />
            )}
            {obj.name}
          </Label>
        </FormGroup>
      ))}
    </div>
  );
};