import React from 'react';

class Collapse extends React.Component {
    constructor() {
        super();

        this.state = {
            showContent: false
            };   
        // this.showMore = this.showMore.bind(this)   this'in showMore() fonskiyonunda tanımlı olabililmesi için JS'in bind methodunu kullandık
        // bind yöntemi de genelde kullanılan bir yöntem değildir.
        // genelde arrow function yöntemi
    }

/*    showMore() {
        //console.log(this)
        // this.setState ({ showContent: true}) burada showMore methodunu kendimiz oluşturduğumuz için "this" undefined dönüyor.
        // render veya constructor methodları önceden tanımlı olduğu için console.log(this) yaptığımızda undefined dönmüyor
        this.setState({showContent:true})
    }
    */

    showMore = () => {
        // console.log(this)
        this.setState({showContent: !this.state.showContent})
    }
    render () {
        return (
            <div>
                    <button className="btn btn-primary w-100" onClick={this.showMore}>
                        Link with href
                    </button>   
            {
                this.state.showContent ? (
                    <div className="collapse show">
                    {this.props.children}
                </div>

                ) : 
                null
            }       
                
            </div>
        );
    }
};
    



export default Collapse;