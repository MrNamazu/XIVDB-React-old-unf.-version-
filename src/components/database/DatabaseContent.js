import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios';

import DatabaseSidebar from './DatabaseSidebar';
import DatabaseStats from './DatabaseStats';
import DatabaseReqirements from './DatabaseReqirements';
import DatabaseGearscore from './DatabaseGearscore';
import DatabaseItemName from './DatabaseItemName';
import DatabaseStatMat from './DatabaseStatMat';
import DatabaseLootTable from './DatabaseLootTable';
import Loadingspinner from '../Loadingspinner';
import DatabaseCraftingRecipe from './DatabaseCraftingRecipe'

const DatabaseContent = () => {
  const { name, id } = useParams();
  const [Data, setData] = useState([""]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://xivapi.com/${name}/${id}`)
      setData(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [name, id])
  
  function databaseReqs(params) {
    if (Data.ClassJobCategory != null) {
      return(<DatabaseReqirements classjob={Data.ClassJobCategory} levelreq={Data.LevelEquip} /> )
    } 
  }
  function databaseSubStats(params) {
    if (Data.Stats != null) {
      return(<DatabaseStatMat stats={Data.Stats} /> )
    } 
  }
  
  return isLoading ? (
      <Loadingspinner />
    ) : (
      <>
      {Data.GameContentLinks?.Recipe?.["ItemResult"] !== undefined &&
        <div className="databaseOptionsButtonBar"><button disabled>Im Herstellungssimulator öffnen</button><button disabled>Zur Herstellungsliste hinzufügen</button></div>
      }

      <div className="databaseMainContentWrapper">
        <div className="databaseMainContent">
          <div className="Test">
          <div className="databaseContentIcon" style={{backgroundImage: `url(https://xivapi.com/${Data.IconHD})` }}></div>
            <div className="databaseContentStatBar">
              <DatabaseItemName namede={Data.Name_de} nameen={Data.Name_en} namefr={Data.Name_fr} nameja={Data.Name_ja} />
              <DatabaseGearscore gearscore={Data.LevelItem} />
              <DatabaseStats physdmg={Data.DamagePhys} magdmg={Data.DamageMag} magdef={Data.DefenseMag} physdef={Data.DefensePhys} delay={Data.DelayMs} />
            </div>
          </div>
          <div className="databaseRequirementBar">
            {databaseReqs()}
          </div>
          <div className="databaseStatMateriaMenu">
            {databaseSubStats()}
          </div>
        </div>
        <DatabaseSidebar collectable={Data.IsCollectable} crest={Data.IsCrestWorthy} dyeable={Data.IsDyeable} glamour={Data.IsGlamourous} added={Data.GamePatch?.Name} />
      </div>
      <DatabaseLootTable/> 
      {Data.GameContentLinks?.Recipe?.["ItemResult"] !== undefined &&
        <DatabaseCraftingRecipe recipe={Data.GameContentLinks.Recipe?.["ItemResult"]} />
      }
    </>
  )
}

export default DatabaseContent
