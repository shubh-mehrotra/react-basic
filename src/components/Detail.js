import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

export default function Detail() {
    const value = useSelector(state => state.submittedValue);
    const testValue = useSelector(state => state.testValue);

    const [inputValue, setInputValue] = useState(value);

    const dispatch = useDispatch();
    
    function handleChange({target}) {
        setInputValue(target.value);
    }

    function handleSubmit(event) {
        dispatch(submitValue(inputValue));
        event.preventDefault();
    }

    function handleReset(event) {
        setInputValue('');
        event.preventDefault();
    }

    return (
        <div>
            {value}
            <br />
            {testValue}
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label>
                    Input: <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <input type="reset" value="Clear" />
            </form>
        </div>
    )
}

// class Detail extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             'inputValue': this.props.defaultInput,
//             'default': useSelector(state => state.submitValue),
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//     }

    

//     render () {
//         return (
//             <div>
//                 {this.state.default}
//                 <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
//                     <label>
//                         Input: <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                     <input type="reset" value="Clear" />
//                 </form>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {
//     return {
//         defaultInput: `${props.defaultInput} ${state.submittedValue}`,
//     };
// };

// const mapActionsToProps = {
//     onSubmitValue: submitValue
// }

// export default connect(mapStateToProps, mapActionsToProps)(Detail);