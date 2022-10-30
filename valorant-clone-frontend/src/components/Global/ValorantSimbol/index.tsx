import { ValorantSimbolProps } from './types';

export function ValorantSimbol(props: ValorantSimbolProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height="auto"
            fill="none"
            viewBox="0 0 35 35"
        >
            <path
                fill={props.color}
                d="M34.737 17.031V3.598c0-.206-.262-.301-.392-.136l-14.671 18.34a.219.219 0 00.171.357h10.602c.287 0 .556-.13.735-.354l3.349-4.186a.947.947 0 00.206-.588zM.41 17.619L11.43 31.395a.938.938 0 00.735.354h10.601a.22.22 0 00.172-.357L.595 3.462c-.13-.162-.392-.07-.392.136v13.433c0 .213.074.42.207.588z"
            ></path>
        </svg>
    );
}
