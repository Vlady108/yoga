import mongoose from 'mongoose';

const LandingDraftSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    fields: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export default mongoose.models.LandingDraft ||
  mongoose.model('LandingDraft', LandingDraftSchema);
