import React from 'react';
import { connect } from "react-redux";

import { setCurrentView } from "../../actions/galleryActions";

import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import './FinishedProjects.less';

@connect((store) => {
    return {
        gallery: store.gallery.gallery,
        galleryView: store.gallery.galleryView,
    };
})

class FinishedProjects extends React.Component {

    handleClickGalleryView(e) {
        if(e.target.id !== 'galleryNext') {
            return
        }
        const gallery = this.props.gallery, 
            view = this.props.galleryView;
        let current = view + 1;
        if( current === gallery.length ) {
            current = 0
        }
        this.props.dispatch(setCurrentView(current));
        this.scrollStartScreen();
    }

    handleClickNavigationItem(current) {
        this.props.dispatch(setCurrentView(current));
        this.scrollStartScreen();
    }

    galleryNavigation() {
        const gallery = this.props.gallery, 
            view = this.props.galleryView;
        return gallery.map((m, i)=> {
            return <li 
            key={i} 
            className={view === i ? 'active' : null}
            onClick={ () => this.handleClickNavigationItem(i) } />
        })
    }

    scrollStartScreen() {
        goToAnchor('FinishedProjectsScrollToStartScreen');
    }

    scrollToScreenCalculator() {
        goToAnchor('ScreenCalculatorScrollToStartScreen');
    }    

    render() {
        const { gallery, galleryView } = this.props;
        return <div className="screen" id="FinishedProjects">

            <ScrollableAnchor id={'FinishedProjectsScrollToStartScreen'}>
                <div style={{position: 'absolute', top: 0}}></div>
            </ScrollableAnchor>

            <div 
            className="gallery_view"                 
            style={{backgroundImage: `url(${gallery[galleryView].photo})`}}></div>
            

            <div className="container">
                <h2 className="title-screen">наши<br/>реализованные<br/>проекты</h2>
            </div>

            <div className="container" id="galleryNext" onClick={ this.handleClickGalleryView.bind(this) }>                    
                <div className="gallery_info">

                    <h3 className="gallery_info_title">
                        {gallery[galleryView].type} «{gallery[galleryView].name}»
                    </h3>

                    <div className="gallery_info_item">
                        <div className="gallery_info_item_icon">
                            <img src="/assets/gallery_info_item_icons/01.png" />
                        </div>
                        <div>
                            <span className="gallery_info_item_name">Высота</span>
                            <span className="gallery_info_item_value">
                                от {gallery[galleryView].params.height[0]} м - {gallery[galleryView].params.height[1]} м
                            </span>
                        </div>
                    </div>

                    <div className="gallery_info_item">
                        <div className="gallery_info_item_icon">
                            <img src="/assets/gallery_info_item_icons/02.png" />
                        </div>
                        <div>
                            <span className="gallery_info_item_name">Площадь</span>
                            <span className="gallery_info_item_value">
                            от {gallery[galleryView].params.area[0]} м<sup><small>2</small></sup> - {gallery[galleryView].params.area[1]} м<sup><small>2</small></sup>
                            </span>
                        </div>
                    </div>

                    <div className="gallery_info_item">
                        <div className="gallery_info_item_icon">
                            <img src="/assets/gallery_info_item_icons/03.png" />
                        </div>
                        <div>
                            <span className="gallery_info_item_name">Срок</span>
                            <span className="gallery_info_item_value">
                            от {gallery[galleryView].params.period[0]} до {gallery[galleryView].params.period[1]} дней
                            </span>
                        </div>
                    </div>

                    <div className="gallery_info_item">
                        <div className="gallery_info_item_icon">
                            <img src="/assets/gallery_info_item_icons/04.png" />
                        </div>
                        <div>
                            <span className="gallery_info_item_name">Стоимость</span>
                            <span className="gallery_info_item_value">
                                от {gallery[galleryView].params.price[0]} т.руб/м<sup><small>2</small></sup>
                            </span>
                        </div>
                    </div>

                    <div className="gallery_info_link">
                        <img src="/assets/icons/icon_gallery.png" />
                        <span>фотогалерея проектов</span>
                    </div>

                    <div className="gallery_info_link">
                        <img src="/assets/icons/icon_3d.png" />
                        <span>панорамы проектов</span>
                    </div>

                </div>
            </div>

            <div className="container">
                <ul className="gallery_navigation">
                    { this.galleryNavigation() }
                </ul>
            </div>

            <div className="container">
                <button 
                className="receive-an-estimate"
                onClick={this.scrollToScreenCalculator}>
                    Получить смету
                </button>
            </div>

        </div>
    }
}

export default FinishedProjects;