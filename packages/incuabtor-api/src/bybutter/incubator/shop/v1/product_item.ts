import * as $sisyphus from "@sisyphus.js/core"
import * as $protobuf from "protobufjs"
import * as $ownership from "./ownership"
import * as $duration from "../../../../google/protobuf/duration"
import * as $reflection from "../../../../_reflection"


/** Privilege 商品内容 */
export interface IPrivilegeProductItem {
    /** Privilege 资源名 */
    privilege?: string
    /** 所有权 */
    ownership?: $ownership.OwnershipType
    /** 特权有效期 */
    duration?: ($duration.IDuration | null)
}

export class PrivilegeProductItem extends $sisyphus.Message<IPrivilegeProductItem> implements IPrivilegeProductItem {
    privilege!: string
    ownership!: $ownership.OwnershipType
    duration!: ($duration.IDuration | null)
    get $reflection() {
        return PrivilegeProductItem.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.PrivilegeProductItem")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): PrivilegeProductItem {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.privilege = reader.string()
                    break
                case 3:
                    result.ownership = reader.uint32()
                    break
                case 4:
                    result.duration = $duration.Duration.decodeDelimited(reader)
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): PrivilegeProductItem {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IPrivilegeProductItem): PrivilegeProductItem {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "privilege":
                    result[key] = String(properties[key])
                    break
                case "ownership":
                    result[key] = typeof properties[key] === "number" ? properties[key] : $ownership.OwnershipType[properties[key]]
                    break
                case "duration":
                    result[key] = $duration.Duration.create(properties[key])
                    break
            }
        }
        return result
    }
}
PrivilegeProductItem.prototype.privilege = ""
PrivilegeProductItem.prototype.ownership = $ownership.OwnershipType.OWNERSHIP_TYPE_UNSPECIFIED
PrivilegeProductItem.prototype.duration = null


/** 实体商品内容 */
export interface IEntityProductItem {
    /** 实体商品 id */
    entity?: string
    /** 商品库存 */
    inventory?: number
}

export class EntityProductItem extends $sisyphus.Message<IEntityProductItem> implements IEntityProductItem {
    entity!: string
    inventory!: number
    get $reflection() {
        return EntityProductItem.reflection
    }

    static readonly reflection = $reflection.root.lookupType(".bybutter.incubator.shop.v1.EntityProductItem")
    static decode(reader: Uint8Array | $protobuf.Reader, length?: number): EntityProductItem {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        const end = length === undefined ? reader.len : reader.pos + length
        const result = new this()
        while(reader.pos < end) {
            let tag = reader.uint32()
            switch(tag>>>3) {
                case 1:
                    result.entity = reader.string()
                    break
                case 10:
                    result.inventory = reader.int32()
                    break
            }
        }
        return result
    }

    static decodeDelimited(reader: Uint8Array | $protobuf.Reader): EntityProductItem {
        if(!(reader instanceof $protobuf.Reader)) reader = $protobuf.Reader.create(reader)
        return this.decode(reader, reader.uint32())
    }
    static create(properties?: IEntityProductItem): EntityProductItem {
        if(properties instanceof this) return properties
        const result = new this()
        if (!properties) return result
        for (const key in properties) {
            if(!properties.hasOwnProperty(key) || !this.prototype.hasOwnProperty(key)) continue
            switch(key) {
                case "entity":
                    result[key] = String(properties[key])
                    break
                case "inventory":
                    result[key] = Number(properties[key])
                    break
            }
        }
        return result
    }
}
EntityProductItem.prototype.entity = ""
EntityProductItem.prototype.inventory = 0