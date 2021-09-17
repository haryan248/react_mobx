import React, { Component } from "react";
import { Button, Box } from "@material-ui/core";

import { inject, observer } from "mobx-react";

@inject("counterStore")
// props에 store에 있는값 주입

@observer
// 변경한 값을 적용하기위해 observer를 적용
class CounterComponent extends Component {
    render() {
        // props로 꺼내기
        const { counterStore } = this.props;
        return (
            <div>
                <Button onClick={() => counterStore.decrement()} variant="contained" color="primary" size="large">
                    -
                </Button>
                <Box component="span" m={5}>
                    {counterStore.count}
                    {/* count() 가 아닌 count 로 접근 */}
                </Box>
                <Button onClick={() => counterStore.increment()} variant="contained" color="primary" size="large">
                    +
                </Button>
            </div>
        );
    }
}

export default CounterComponent;
