import React from 'react'

import images from './constants/images'
import './NFTPreviewCard.css'

const NFTPreviewCard = () => {
  return (
    <div className='app__NFTPreviewCard-card'>
        <div className='app__NFTPreviewCard-preview'>
            <div className='app__NFTPreviewCard-overlay'>
                <img className='app__NFTPreviewCard-view-icon' src={images.viewIcon} alt='View Icon'/>
            </div>
            <img className='app__NFTPreviewCard-nft' src={images.equilibrium} alt='Equilibrium NFT' />
        </div>
        <header>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
        </header>
        <div className='app__NFTPreviewCard-pricing'>
            <div className='app__NFTPreviewCard-price'>
                <img src={images.ethereum} alt='Ethereum Icon' />
                <p>0.041 ETH</p>
            </div>
            <div className='app__NFTPreviewCard-timeleft'>
                <img src={images.clock} alt='Clock Icon' />
                <p>3 days left</p>
            </div>
        </div>
        <hr className='app__NFTPreviewCard-divider solid'/>
        <div className='app__NFTPreviewCard-creator-info'>
            <img className='app__NFTPreviewCard-avatar' src={images.avatar} alt='Creator Avatar'/>
            <p>Creation of <b>Jules Wyvern</b></p>
        </div>
    </div>
  )
}

export default NFTPreviewCard