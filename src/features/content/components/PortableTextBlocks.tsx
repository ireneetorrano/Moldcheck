import type { PortableTextBlock } from "@/types/content";

function getBlockText(block: PortableTextBlock) {
  return block.children?.map((child) => child.text).join("") ?? "";
}

export function PortableTextBlocks({ blocks }: { blocks: PortableTextBlock[] }) {
  return (
    <div className="article-content">
      {blocks.map((block) => {
        const text = getBlockText(block);

        if (!text) {
          return null;
        }

        if (block.style === "h2") {
          return <h2 key={block._key ?? text}>{text}</h2>;
        }

        if (block.style === "h3") {
          return <h3 key={block._key ?? text}>{text}</h3>;
        }

        if (block.style === "blockquote") {
          return <blockquote key={block._key ?? text}>{text}</blockquote>;
        }

        return <p key={block._key ?? text}>{text}</p>;
      })}
    </div>
  );
}
