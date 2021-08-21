import React, {useState} from 'react';
import Row from "../row";
import {PlanetDetails, PlanetList} from "../sw-components";

const PlanetPage = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const onItemSelected = (id) => {
    setSelectedItem(id)
  }

  return (
    <Row
      left={ <PlanetList onItemSelected={onItemSelected}/>}
      right={<PlanetDetails itemId={selectedItem}/>}
    />
  );
}

export default PlanetPage

