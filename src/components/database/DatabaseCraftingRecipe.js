import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

import Loadingspinner from '../Loadingspinner';


const DatabaseCraftingRecipe = ({recipe}) => {
  const { t } = useTranslation();
  const [Data, setData] = useState([""]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://xivapi.com/recipe/${recipe?.[0]}`)
      setData(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [recipe])

  const DurabilityStat = Data.RecipeLevelTable?.Durability*Data.DurabilityFactor/100
  const DifficultyStat = Data.RecipeLevelTable?.Difficulty*Data.DifficultyFactor/100
  const QualityStat = Data.RecipeLevelTable?.Quality*Data.QualityFactor/100

  return isLoading ? (
    <Loadingspinner />
  ) : (
    <div>
      <div><p className="databaseLootTableOptionTitle">{t('craftableTitle')}:</p></div>
      <div className="databaseLootTableCraftingContent">

        <div className="databaseLootTableCraftingHeader">
          <div className="databaseLootTableCraftingHeaderWrapper">
            <div className="databaseLootTableCraftingIcon" style={{backgroundImage: `url(https://xivapi.com/${Data.Icon})` }}></div>
            <div className="databaseLootTableCraftingHeaderContent">
              <div className="databaseLootTableCraftingTitle"><span style={{fontWeight:"400"}}>{t("craftingfor")}</span> {Data.Name_en}</div>
              <div style={{display:'flex'}}>
                <div className="databaseLootTableCraftingClassRequirements">
                  <img alt={Data.Name_en} src={`https://xivapi.com${Data.ClassJob.Icon}`} />
                  <span>{t(`${Data.ClassJob.Abbreviation_en}`)}</span>
                </div>
                <div className="databaseLootTableCraftingClassRequirements">
                  <span className="databaseLootTableCraftingClassRequirementsLevel">Level: {Data.RecipeLevelTable.ClassJobLevel}</span>
                  <span>
                    {Array.from({length: Data.RecipeLevelTable?.Stars}).map((e, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </span>
                </div>
              </div>
              {Data.SecretRecipeBook !== null &&
              <Link style={{textDecoration:"none"}} to={`/database/item/${Data.SecretRecipeBook?.ItemTargetID}`}>
                <div className="databaseLootTableCraftingItemRequirements">
                  <img alt={Data.SecretRecipeBook?.Name_en}src={`https://xivapi.com${Data.SecretRecipeBook?.Item.IconHD}`}/>
                  <span>{Data.SecretRecipeBook?.Name_en}</span>
                </div>
              </Link>
              }
            </div>
          </div>
          <div className="databaseLootTableCraftingCraftingStats">
            <span style={{fontWeight:400}}>{t("Durability")}:</span><span>{DurabilityStat.toFixed(0)}</span>
            <i className="fas fa-minus" style={{marginRight:"10px"}}></i>
            <span style={{fontWeight:400}}>{t("Difficulty")}:</span><span>{DifficultyStat.toFixed(0)}</span>
            <i className="fas fa-minus" style={{marginRight:"10px"}}></i>
            <span style={{fontWeight:400}}>{t("Quality")}:</span><span>{QualityStat.toFixed(0)}</span>
          </div>
        </div>
        <div className="databaseLootTableCraftingCurrencyContent">
          <div className="databaseLootTableCraftingCurrencyHeader">{t('crystals')}:</div>
          <div className="databaseLootTableCraftingCurrencyWrapper">
            {Data.ItemIngredient7 !== null &&
              <div><Link to={`/database/item/${Data.ItemIngredient7.ID}`}><img alt={Data.ItemIngredient7?.Name_en}src={`https://xivapi.com${Data.ItemIngredient7?.IconHD}`}/></Link><span>{Data.AmountIngredient7}x</span></div>
            }
            {Data.ItemIngredient8 !== null &&
              <div><Link to={`/database/item/${Data.ItemIngredient8.ID}`}><img alt={Data.ItemIngredient8?.Name_en}src={`https://xivapi.com${Data.ItemIngredient8?.IconHD}`}/></Link><span>{Data.AmountIngredient8}x</span></div>
            }
            {Data.ItemIngredient9 !== null &&
              <div><Link to={`/database/item/${Data.ItemIngredient9.ID}`}><img alt={Data.ItemIngredient9?.Name_en}src={`https://xivapi.com${Data.ItemIngredient9?.IconHD}`}/></Link><span>{Data.AmountIngredient9}x</span></div>
            }
          </div>
        </div>
        <div className="databaseLootTableCraftingItemInc">
          <div className="databaseLootTableCraftingItemIncHeader">{t('ingredients')}:</div>
          <div className="databaseLootTableCraftingItemIncWrapper">

            {Data.ItemIngredient0 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient0.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient0?.Name_en}src={`https://xivapi.com${Data.ItemIngredient0?.IconHD}`}/><span>{Data.AmountIngredient0}x</span><span>{Data.ItemIngredient0?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient1 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient1.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient1?.Name_en}src={`https://xivapi.com${Data.ItemIngredient1?.IconHD}`}/><span>{Data.AmountIngredient1}x</span><span>{Data.ItemIngredient1?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient2 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient2.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient2?.Name_en}src={`https://xivapi.com${Data.ItemIngredient2?.IconHD}`}/><span>{Data.AmountIngredient2}x</span><span>{Data.ItemIngredient2?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient3 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient3.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient3?.Name_en}src={`https://xivapi.com${Data.ItemIngredient3?.IconHD}`}/><span>{Data.AmountIngredient3}x</span><span>{Data.ItemIngredient3?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient4 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient4.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient4?.Name_en}src={`https://xivapi.com${Data.ItemIngredient4?.IconHD}`}/><span>{Data.AmountIngredient4}x</span><span>{Data.ItemIngredient4?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient5 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient5.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient5?.Name_en}src={`https://xivapi.com${Data.ItemIngredient5?.IconHD}`}/><span>{Data.AmountIngredient5}x</span><span>{Data.ItemIngredient5?.Name_en}</span></div></Link>
            }
            {Data.ItemIngredient6 !== null &&
              <Link to={`/database/item/${Data.ItemIngredient6.ID}`}><div className="databaseLootTableCraftingItemIncRow"><img alt={Data.ItemIngredient6?.Name_en}src={`https://xivapi.com${Data.ItemIngredient6?.IconHD}`}/><span>{Data.AmountIngredient6}x</span><span>{Data.ItemIngredient6?.Name_en}</span></div></Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatabaseCraftingRecipe
