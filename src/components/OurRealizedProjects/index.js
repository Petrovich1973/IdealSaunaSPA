import React from 'react';

import './OurRealizedProjects.less';

class OurRealizedProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            gallery: [1, 2, 3, 4, 5],
            galleryView: 1
        };
    }

    handleClickGalleryView() {
        let current = this.state.galleryView + 1
        if( this.state.galleryView + 1 > 5 ) {
            current = 1
        }
        this.setState({
            galleryView: current
        })
    }

    handleClickNavigationItem(item) {
        this.setState({
            galleryView: item
        })
    }

    galleryNavigation() {
        return this.state.gallery.map(m => {
            return <li 
                    key={m} 
                    className={this.state.galleryView === m ? 'active' : null}
                    onClick={ () => this.handleClickNavigationItem(m) } />
        })
    }

    render() {
        const { galleryView } = this.state;
        return (
            <div className="screen" id="OurRealizedProjects">
                <div className="container">
                    <h2 className="title-screen">наши<br/>реализованные<br/>проекты</h2>
                </div>
                <div className="container">
                    <div className="social-link">
                        <a href="#" className="fa fa-vk" title="vk"></a>
                        <a href="#" className="fa fa-facebook-square" title="facebook"></a>
                        <a href="#" className="fa fa-instagram" title="instagram"></a>
                        <a href="#" className="fa fa-google-plus-square" title="google plus"></a>
                    </div>
                </div>
                <div className="container">
                    <div className="gallery">
                        <div className="gallery_info">
                            <h3 className="gallery_info_title">Сауны</h3>
                            <div className="gallery_info_item">
                                <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/01.png" /></div>
                                <div>
                                    <span className="gallery_info_item_name">Высота</span>
                                    <span className="gallery_info_item_value">от 1,9 м - 2,5 м</span>
                                </div>
                            </div>
                            <div className="gallery_info_item">
                                <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/02.png" /></div>
                                <div>
                                    <span className="gallery_info_item_name">Площадь</span>
                                    <span className="gallery_info_item_value">от 2 м2 - 16 м2</span>
                                </div>
                            </div>
                            <div className="gallery_info_item">
                                <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/03.png" /></div>
                                <div>
                                    <span className="gallery_info_item_name">Срок</span>
                                    <span className="gallery_info_item_value">от 7 до 20 дней</span>
                                </div>
                            </div>
                            <div className="gallery_info_item">
                                <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/04.png" /></div>
                                <div>
                                    <span className="gallery_info_item_name">Стоимость</span>
                                    <span className="gallery_info_item_value">от 50 т.руб/м2</span>
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
                        <div className="gallery_view">
                            <img src={ `/assets/OurRealizedProjects/0${galleryView}.jpg` } onClick={ () => this.handleClickGalleryView() } />
                            <ul className="gallery_navigation">
                                { this.galleryNavigation() }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button className="receive-an-estimate">Получить смету</button>
                </div>
            </div>          
        )
    }
}

export default OurRealizedProjects;