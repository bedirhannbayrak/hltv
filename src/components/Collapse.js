import React from 'react';

class Collapse extends React.Component {
    // constructor() {
    //     console.log('constractor calisti')
    //     super();

    //     this.state = {
    //         showContent: false
    //     };
    //     // this.showMore = this.showMore.bind(this)   this'in showMore() fonskiyonunda tanımlı olabililmesi için JS'in bind methodunu kullandık
    //     // bind yöntemi de genelde kullanılan bir yöntem değildir.
    //     // genelde arrow function yöntemi
    // }

    // yukarıdaki constructor methodunda tanımladığımız state'i aşağıdaki şekilde de tanımlayabiliriz
    state = { showContent: false }

    /*    showMore() {
            //console.log(this)
            // this.setState ({ showContent: true}) burada showMore methodunu kendimiz oluşturduğumuz için "this" undefined dönüyor.
            // render veya constructor methodları önceden tanımlı olduğu için console.log(this) yaptığımızda undefined dönmüyor
            this.setState({showContent:true})
        }
        */

    showMore = () => {
        // console.log(this)
        this.setState({ showContent: !this.state.showContent })
    }

    componentDidMount() {
        console.log('component did mount calisti')
    }

    componentDidUpdate() {
        console.log('componentdidupdate calisti')
    }
    render() {
        return (
            console.log('render calisti'),
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {/* {this.props.children.props.cardTitle} bunu kaldırarak aşağıdaki kodu yazdık daha kullanışlıdır
                    genel kullanımı böyledir. */}

                    {React.Children.map(this.props.children, children => children.props.cardTitle)}

                </button>
                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {/* {this.props.children} komutu yerine aşağıdaki kodu yazdık*/}
                            {React.Children.map(this.props.children, children => children)}
                        </div>

                    ) :
                        null
                }

            </div>
        );
    }
};




export default Collapse;