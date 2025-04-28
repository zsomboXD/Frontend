import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';

export const CategDropdown = ({ categories1, selCateg, setSelCateg }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="category-dropdown-container">
      <Dropdown 
        isOpen={dropdownOpen} 
        toggle={toggle}
        style={{ width: '100%' }}
      >
        <DropdownToggle 
          caret={false}
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            color: selCateg ? '#ffffff' : '#999',
            borderRadius: '8px',
            padding: '0.75rem 1.25rem',
            width: '100%',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        >
          <span>{selCateg || 'Select Category'}</span>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            style={{ 
              transition: 'transform 0.3s ease',
              transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }} 
          />
        </DropdownToggle>
        <DropdownMenu
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
            borderRadius: '8px',
            marginTop: '0.5rem',
            width: '100%',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }}
        >
          {categories1 ? (
            categories1.map(obj => (
              <DropdownItem 
                key={obj.name}
                onClick={() => setSelCateg(obj.name)}
                style={{
                  color: selCateg === obj.name ? '#4CAF50' : '#e0e0e0',
                  backgroundColor: 'transparent',
                  padding: '0.75rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease'
                }}
                className="dropdown-item-hover"
              >
                <span>{obj.name}</span>
                {selCateg === obj.name && (
                  <FontAwesomeIcon icon={faCheck} style={{ marginLeft: '1rem' }} />
                )}
              </DropdownItem>
            ))
          ) : (
            <DropdownItem 
              disabled
              style={{
                color: '#999',
                padding: '0.75rem 1.5rem'
              }}
            >
              No categories available
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};