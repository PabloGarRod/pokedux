import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css"

const PokemonCard = ({name, img}) => {

    return <Card
        title={name}
        cover=
            {<img src={img}
            alt={name}/>}
        extra={<StarOutlined/>}

        >
            <Meta description="fire, magic"/>
    </Card>
}

export default PokemonCard;