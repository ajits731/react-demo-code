import { clear } from '@testing-library/user-event/dist/clear';
import React, {Component} from 'react';

class Global extends Component {
    handleReload() {
        window.reload();
    }

    handleClearUserData() {
        
    }

    //
    render() {
        return null
    }
}

export default Global;