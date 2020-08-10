import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"


export interface IServiceMetadata {
    name?: string
}

export class ServiceMetadata extends $sisyphus.Message<IServiceMetadata> implements IServiceMetadata {
    name!: string
    get $reflection() {
        return ServiceMetadata.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".sisyphus.api.ServiceMetadata")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): ServiceMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.name = reader.string()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): ServiceMetadata {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IServiceMetadata): ServiceMetadata {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "name":
                    result[key] = String(properties[key])
                    break
            }
        }
        return result
    }
}
ServiceMetadata.prototype.name = ""