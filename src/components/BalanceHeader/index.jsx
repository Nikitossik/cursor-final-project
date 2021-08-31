import {HeaderWrapper, HeaderBalanceBlock, HeaderContent, HeaderBalance}  from '../styles';

import {useSelector} from 'react-redux';
import { selectBalance } from '../../redux/balanceSlice';

const BalanceHeader = () => {

    const balance = useSelector(selectBalance);

    return (
        <HeaderWrapper>
            <HeaderBalanceBlock>
                <HeaderContent>
                    <h5>Your balance</h5>
                    <HeaderBalance>{balance} $</HeaderBalance>
                </HeaderContent>
            </HeaderBalanceBlock>
        </HeaderWrapper>
    );
};

export default BalanceHeader;