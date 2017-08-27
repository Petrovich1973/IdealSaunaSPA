import React from 'react';

import './FinishedProjects.less';

class FinishedProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            gallery: [{
                id: 1,
                type: 'Сауна',
                name: 'Престиж',
                photo: '/assets/OurRealizedProjects/01.jpg',
                params: {
                    height: [1.9, 2.5],
                    area: [2, 16],
                    period: [7, 20],
                    price: [50]
                }
            },{
                id: 2,
                type: 'Сауна',
                name: 'Пират',
                photo: '/assets/OurRealizedProjects/02.jpg',
                params: {
                    height: [1.7, 2.8],
                    area: [5, 10],
                    period: [17, 30],
                    price: [150]
                }
            },{
                id: 3,
                type: 'Сауна',
                name: 'Гурия',
                photo: '/assets/OurRealizedProjects/03.jpg',
                params: {
                    height: [2.4, 3],
                    area: [8, 16],
                    period: [27, 41],
                    price: [200]
                }
            },{
                id: 4,
                type: 'Сауна',
                name: 'Комфорт',
                photo: '/assets/OurRealizedProjects/04.jpg',
                params: {
                    height: [1.5, 3.5],
                    area: [20, 26],
                    period: [35, 50],
                    price: [450]
                }
            },{
                id: 5,
                type: 'Баня',
                name: 'Бревно',
                photo: '/assets/OurRealizedProjects/05.jpg',
                params: {
                    height: [1.2, 2.7],
                    area: [2, 10],
                    period: [8, 14],
                    price: [80]
                }
            }],
            galleryView: 0
        };
    }

    handleClickGalleryView() {
        let current = this.state.galleryView + 1
        if( current === this.state.gallery.length ) {
            current = 0
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
        return this.state.gallery.map((m, i)=> {
            return <li 
                    key={i} 
                    className={this.state.galleryView === i ? 'active' : null}
                    onClick={ () => this.handleClickNavigationItem(i) } />
        })
    }

    render() {
        const { gallery, galleryView } = this.state;
        return (
            <div className="screen" id="FinishedProjects">

                <div 
                className="gallery_view"                 
                style={{backgroundImage: `url(${gallery[galleryView].photo})`}} />

                <div className="container">
                    <h2 className="title-screen">наши<br/>реализованные<br/>проекты</h2>
                </div>

                <div className="container" style={{display: 'none'}}>
                    <div className="social-link">
                        <a href="#" className="fa fa-vk" title="vk"></a>
                        <a href="#" className="fa fa-facebook-square" title="facebook"></a>
                        <a href="#" className="fa fa-instagram" title="instagram"></a>
                        <a href="#" className="fa fa-google-plus-square" title="google plus"></a>
                    </div>
                </div>

                <div className="container" onClick={ this.handleClickGalleryView.bind(this) }>                    
                    <div className="gallery_info">
                        <h3 className="gallery_info_title">{gallery[galleryView].type} «{gallery[galleryView].name}»</h3>
                        <div className="gallery_info_item">
                            <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/01.png" /></div>
                            <div>
                                <span className="gallery_info_item_name">Высота</span>
                                <span className="gallery_info_item_value">
                                    от {gallery[galleryView].params.height[0]} м - {gallery[galleryView].params.height[1]} м
                                </span>
                            </div>
                        </div>
                        <div className="gallery_info_item">
                            <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/02.png" /></div>
                            <div>
                                <span className="gallery_info_item_name">Площадь</span>
                                <span className="gallery_info_item_value">
                                    от {gallery[galleryView].params.area[0]} м<sup><small>2</small></sup> - {gallery[galleryView].params.area[1]} м<sup><small>2</small></sup>
                                </span>
                            </div>
                        </div>
                        <div className="gallery_info_item">
                            <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/03.png" /></div>
                            <div>
                                <span className="gallery_info_item_name">Срок</span>
                                <span className="gallery_info_item_value">
                                    от {gallery[galleryView].params.period[0]} до {gallery[galleryView].params.period[1]} дней
                                </span>
                            </div>
                        </div>
                        <div className="gallery_info_item">
                            <div className="gallery_info_item_icon"><img src="/assets/gallery_info_item_icons/04.png" /></div>
                            <div>
                                <span className="gallery_info_item_name">Стоимость</span>
                                <span className="gallery_info_item_value">от {gallery[galleryView].params.price[0]} т.руб/м<sup><small>2</small></sup></span>
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
                    <button className="receive-an-estimate">Получить смету</button>
                </div>

            </div>          
        )
    }
}

export default FinishedProjects;