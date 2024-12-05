import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuHeader, DropdownMenu, DropdownItem, Dropdown, DropdownHeader } from 'semantic-ui-react';
import '../App.css';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import categoryService from '../services/categoryService';

export default function Navi({ isAuthenticated, handleSignOut, kullaniciAdi, setLevel, falseCount, trueCount, userPoints }) {
  const [categories, setCategories] = useState([]); // CategoryName verilerini tutacak state
  const categoryIds = [14, 12, 11, 8, 7, 6, 5, 4, 1, 21, 20, 27, 26, 25]; // Çekmek istenen kategori ID'leri
  const [activeItem, setActiveItem] = useState('');
  const handleItemClick = (e, { name }) => {
    setActiveItem(name); // Menü öğesini aktif hale getir

    // Menü öğesinin aktifliğini bir süre sonra sıfırla (3 saniye örneğin)
    setTimeout(() => {
      setActiveItem('');
    }, 1000); // 1000 ms = 1 saniye
  };


  // CategoryName verilerini çek
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryPromises = categoryIds.map((id) =>
          categoryService.getCategoryById(id).then((response) => response.data.data)
        );
        const results = await Promise.all(categoryPromises);
        setCategories(results);
      } catch (error) {
        console.error("Kategoriler alınırken bir hata oluştu:", error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div>
      {/* Menü başlangıcı */}
      <Menu inverted borderless style={{ backgroundColor: "rgb(255,0,71)", color: "#FFF" }} >
        <Menu.Item
          as={Link}
          to="/"
          className="fs-4 fw-bold fst-normal"
          name="H4C K T O O L S"
          position="left"
          style={{ fontFamily: 'Courier New', marginLeft: "200px" }}
        />

        <Menu.Menu position="right" style={{ marginTop: "6px" }}>
          {isAuthenticated ? (
            <SignedIn
              userPoints={userPoints}
              falseCount={falseCount}
              trueCount={trueCount}
              setLevel={setLevel}
              handleSignOut={handleSignOut}
              kullaniciAdi={kullaniciAdi}
            />
          ) : (
            <SignedOut />
          )}
        </Menu.Menu>
      </Menu>

      {/* Kategorileri göstereceğim vertical menü */}
      <Menu vertical fixed="top left" inverted className="scrollable-menu" style={{ backgroundColor: "rgb(255, 0, 71)", color: "#FFF" }} >

      <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[0])?.categoryName || "Loading..."} </MenuHeader>

      <Link to="/">
        <MenuItem name="Active Scanning" active={activeItem === 'Active Scanning'} onClick={handleItemClick}  style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }}/>
      </Link>

      <Link to="/profile">
      <MenuItem name="Search Open Technical Databases" active={activeItem === 'Search Open Technical Databases'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }}  />
      </Link>
  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[1])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Stage Capabilities" active={activeItem === 'Stage Capabilities'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>
  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[2])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Phishing" active={activeItem === 'Phishing'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

      <Link to="/">
      <MenuItem name="Drive-by Compromise" active={activeItem === 'Drive-by Compromise'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

      <Link to="/">
      <MenuItem name="Exploit Public Facing Application" active={activeItem === 'Exploit Public Facing Application'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>
  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[3])?.categoryName || "Loading..."}</MenuHeader>


  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[4])?.categoryName || "Loading..."}</MenuHeader>


  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[5])?.categoryName || "Loading..."}</MenuHeader>

  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[6])?.categoryName || "Loading..."}</MenuHeader>


  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[7])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Network Sniffing" active={activeItem === 'Network Sniffing'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

      <Link to="/">
      <MenuItem name="Exploitation for Credential Access" active={activeItem === 'Exploitation for Credential Access'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

      <Link to="/">
      <MenuItem name="Brute Force" active={activeItem === 'Brute Force'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>
  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[8])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="File and Directory Discovery" active={activeItem === 'File and Directory Discovery'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[9])?.categoryName || "Loading..."}</MenuHeader>


  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[10])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Data from Information Repositories" active={activeItem === 'Data from Information Repositories'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>


                <Dropdown className="dropdown-menu" item text="Data from Information Repositories" style={{fontFamily: 'Consolas', color: '#FFF', fontSize: '14px'}}>
          <DropdownMenu>
            <DropdownHeader>Text Size</DropdownHeader>
            <DropdownItem>Small</DropdownItem>
            <DropdownItem>Medium</DropdownItem>
            <DropdownItem>Large</DropdownItem>
          </DropdownMenu>
        </Dropdown>


  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[11])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Protocol Tunneling" active={activeItem === 'Protocol Tunneling'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[12])?.categoryName || "Loading..."}</MenuHeader>

  </MenuItem>

  <MenuItem key={categoryIds[0]}>
    <MenuHeader style={{ fontFamily: 'Consolas', color: '#333333', fontSize: '16px' }} >{categories.find((c) => c.categoryId === categoryIds[13])?.categoryName || "Loading..."}</MenuHeader>

      <Link to="/">
        <MenuItem name="Network Denial of Service" active={activeItem === 'Network Denial of Service'} onClick={handleItemClick} style={{ fontFamily: 'Consolas', color: '#FFF', fontSize: '14px' }} />
      </Link>

  </MenuItem>

        

      </Menu>
    </div>
  );
}
