import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


export const CategDropdown=({categories1,selCateg,setSelCateg})=> {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret>
          {selCateg ? selCateg :  'Kategória'}
        </DropdownToggle>
        <DropdownMenu>
            {categories1 ? categories1.map(obj=>
                 <DropdownItem key={obj.name}
                    onClick={()=>setSelCateg(obj.name)}
                 >
                    {obj.name}
                </DropdownItem>
            )
          :
          <DropdownItem disabled>Nincs elérhető kategória</DropdownItem>
          } 
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
