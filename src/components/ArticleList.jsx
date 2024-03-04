import { loremIpsum } from 'lorem-ipsum';
import { AutoSizer, List } from 'react-virtualized';
import Article from './Article';
const COUNT = 10000;
const ArticleList = () => {
    const list = Array(COUNT)
        .fill()
        .map((item, index) => ({
            id: index + 1,
            name: 'Shakil Ahammed',
            text: loremIpsum({
                count: 1,
                units: 'sentence',
                sentenceLowerBound: 16,
                sentenceUpperBound: 20,
            }),
            image: 'https://placehold.co/40',
        }));

    const rowRenderer = ({ key, index, style }) => {
        return (
            <Article
                key={key}
                style={style}
                id={list[index].id}
                name={list[index].name}
                text={list[index].text}
                image={list[index].image}
            />
        );
    };
    return (
        <div className="list">
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        // width={1200}
                        // height={700}
                        width={width}
                        height={height}
                        rowCount={list.length}
                        rowHeight={100}
                        rowRenderer={rowRenderer}
                        overscanRowCount={5}
                    />
                )}
            </AutoSizer>
            {/* {list.map((item) => (
                <Article
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    text={item.text}
                    image={item.image}
                />
            ))} */}
        </div>
    );
};

export default ArticleList;
