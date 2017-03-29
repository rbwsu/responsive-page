import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <div className="main">
                <article className="primary">
                    {/*<h1>Article Title</h1>*/}
                    <img src="http://lorempixel.com/400/200/" alt="" className="hero" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda excepturi, incidunt quae optio, accusamus, perferendis ducimus a fugiat molestias laboriosam provident odio architecto officia quos nesciunt. Eveniet nesciunt doloremque facilis.</p>
                </article>
            </div>
        );
    }
}

export default Section;