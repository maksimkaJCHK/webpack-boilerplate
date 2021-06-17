import { TypedUseSelectorHook, useSelector} from 'react-redux';
import { TRoorReducer } from '../store/reducers/rootReducer';

export const useTypeSelector: TypedUseSelectorHook<TRoorReducer> = useSelector;