import { RiArrowUpCircleLine } from "react-icons/ri";

export const Header = ({ title, sols }) => (
    <>
        <div>
            <span>{title}</span>
            <span>{`${sols} sols on mars`}</span>
        </div>
        <div>
            <RiArrowUpCircleLine />
        </div>
    </>
)