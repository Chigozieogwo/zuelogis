import mongoose from 'mongoose'

const trackSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },

    name2: { type: String },
    email2: { type: String },
    phoneNumber2: { type: String },
    address2: { type: String },

    origin: { type: String },
    destination: { type: String },
    status: { type: String },
    weight: { type: String },
    items: { type: String },
    qty: { type: String },
    pack: { type: String },
    typeOfShipment: { type: String },
    pickUpTime: { type: String },
    carrierRefNo: { type: String },
    departureTime: { type: String },
    pickUpDate: { type: String },

    trackNumber: { type: String },
    date: { type: Date, default: Date.now },
    shipmentHistory:[
      {
        data_history : { type :String},
        location_history:{ type : String},
        status_history:{ type : String},
        comment:{ type : String}
      }
    ]
  },
  {
    timestamps: true,
  }
)

const Track = mongoose.model('Track', trackSchema)

export default Track
