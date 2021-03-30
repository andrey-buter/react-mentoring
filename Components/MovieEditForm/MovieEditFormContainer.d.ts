/// <reference types="react" />
import './MovieEditForm.scss';
import { Values } from './Values.model';
interface Props {
    movieId?: string | undefined;
    data?: Values | undefined;
}
declare const MovieEditFormContainer: (props: Props) => JSX.Element;
export default MovieEditFormContainer;
