import React from 'react';
import { connect } from "react-redux";

import { fetchArticles, setCurrentArticle } from "../../actions/articlesActions";

import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import './BeforeBuildSauna.less';

@connect((store) => {
    return {
        articles: store.articles.articles
    };
})

class BeforeBuildSauna extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchArticles());
    }

    handleClickItem(item) {
        let list = this.props.articles.map(m => {
            if (m.id === item.id) {
                return { ...m, isActive: true };
            } else {
                return { ...m, isActive: false };
            }
        });
        document.querySelector('.build-sauna_detail-view').classList.add('transition');
        setTimeout(transition.bind(this), 300);
        function transition() {
            this.props.dispatch(setCurrentArticle(list));
            document.querySelector('.build-sauna_detail-view').classList.remove('transition');
        }
    }

    scrollToScreenReviews() {
        goToAnchor('ScreenReviewsScrollToStartScreen');
    }  

    render() {

        const { articles } = this.props;

        if (!articles.length) {
            return (
                <div
                    className="screen"
                    id="BeforeBuildSauna"
                    style={{ textAlign: 'center', minHeight: '4vh' }}
                >
                    <h3>Данные загружаются...</h3>
                </div>
            );
        }

        return (
            <div className="screen" id="BeforeBuildSauna">
                <div className="container">
                    <h2 className="title-screen">5 действий<br />до строительства<br />вашей сауны</h2>
                </div>
                <div className="container">
                    <div className="build-sauna">
                        <div className="build-sauna_list">
                            {articles.map((m, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={m.isActive ? 'build-sauna_item active' : 'build-sauna_item'}
                                        onClick={() => this.handleClickItem(m)}
                                    >
                                        <div className="build-sauna_item_bulit"><span>{m.id}</span></div>
                                        <div className="build-sauna_item_name">
                                            <h3>{m.name}</h3>
                                            <p>{m.intro || null}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="build-sauna_detail-view">
                            <div dangerouslySetInnerHTML={{ __html: articles.filter(f => f.isActive)[0].detail }} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img
                        src="/libs/img/icon-mouse.png"
                        className="mouse"
                        onClick={this.scrollToScreenReviews}
                    />
                </div>
            </div>
        );
    }
}

BeforeBuildSauna.displayName = 'BeforeBuildSauna';

export default BeforeBuildSauna;