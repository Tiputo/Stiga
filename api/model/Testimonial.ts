import { SchemaDefinition as def } from "@contember/schema-definition"
import { Content } from "./Content"
import { Image } from "./Image"

export class Testimonial {
    content = def.oneHasOne(Content)
    author = def.oneHasOne(TestimonialAuthor)
}

export class TestimonialAuthor {
    name = def.stringColumn().notNull()
    title = def.stringColumn()
    image = def.manyHasOne(Image)
}