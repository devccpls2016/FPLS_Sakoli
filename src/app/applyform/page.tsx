"use client";

import Image from "next/image";
import { useState } from "react";

type FormData = {
  registrationNo?: string;
  admFileNo?: string;
  tcFileNo?: string;
  dateOfAdmission?: string;
  schoolLocation?: string;
  className?: string;
  curriculum?: string;

  firstName?: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  placeOfBirth?: string;
  gender?: string;
  religion?: string;
  nationality?: string;
  caste?: string;
  address?: string;
  telephone?: string;

  emergencyName?: string;
  emergencyRelationship?: string;
  emergencyContact?: string;
  emergencyAddress?: string;

  // Parent details
  fatherName?: string;
  fatherDob?: string;
  fatherQualification?: string;
  fatherMotherTongue?: string;
  fatherDesignation?: string;
  fatherOfficeAddress?: string;
  fatherTelephoneRes?: string;
  fatherTelephoneOffice?: string;
  fatherMobile?: string;
  fatherEmail?: string;

  motherName?: string;
  motherDob?: string;
  motherQualification?: string;
  motherMotherTongue?: string;
  motherDesignation?: string;
  motherOfficeAddress?: string;
  motherTelephoneRes?: string;
  motherTelephoneOffice?: string;
  motherMobile?: string;
  motherEmail?: string;

  // previous school
  prevSchoolName?: string;
  prevSchoolLocation?: string;
  prevClassCompleted?: string;
  prevYearsAttended?: string;
  prevLanguage?: string;
  prevCurriculum?: string;

  // health and documents
  healthInfo?: string;
  docBirthCert?: boolean;
  docLeavingCert?: boolean;
  docReportCard?: boolean;
  docPassportPhotos?: boolean;
  docAadhar?: boolean;

  photoDataUrl?: string | null;
};

const empty: FormData = {
  registrationNo: "",
  admFileNo: "",
  tcFileNo: "",
  dateOfAdmission: "",
  schoolLocation: "",
  className: "",
  curriculum: "",

  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  placeOfBirth: "",
  gender: "",
  religion: "",
  nationality: "",
  caste: "",
  address: "",
  telephone: "",

  emergencyName: "",
  emergencyRelationship: "",
  emergencyContact: "",
  emergencyAddress: "",

  fatherName: "",
  fatherDob: "",
  fatherQualification: "",
  fatherMotherTongue: "",
  fatherDesignation: "",
  fatherOfficeAddress: "",
  fatherTelephoneRes: "",
  fatherTelephoneOffice: "",
  fatherMobile: "",
  fatherEmail: "",

  motherName: "",
  motherDob: "",
  motherQualification: "",
  motherMotherTongue: "",
  motherDesignation: "",
  motherOfficeAddress: "",
  motherTelephoneRes: "",
  motherTelephoneOffice: "",
  motherMobile: "",
  motherEmail: "",

  prevSchoolName: "",
  prevSchoolLocation: "",
  prevClassCompleted: "",
  prevYearsAttended: "",
  prevLanguage: "",
  prevCurriculum: "",

  healthInfo: "",
  docBirthCert: false,
  docLeavingCert: false,
  docReportCard: false,
  docPassportPhotos: false,
  docAadhar: false,

  photoDataUrl: null,
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return update("photoDataUrl", null);
    const reader = new FileReader();
    reader.onload = () => update("photoDataUrl", reader.result as string);
    reader.readAsDataURL(file);
  }

  function printForm() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setMessage(null);
    if (!form.firstName?.trim() || !form.lastName?.trim()) {
      setMessage("Please provide student's first and last name.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Unknown error");
      setMessage("Application submitted successfully.");
      setForm(empty);
    } catch (err: any) {
      setMessage(`Submission failed: ${err?.message || err}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full p-6 bg-zinc-50">
      <style>{`
        @page { size: A4 portrait; margin: 12mm; }
        @media print {
          /* general reset for printing */
          html, body { height: auto; background: #fff !important; color: #000 !important; }
          /* hide everything by default then reveal printable area */
          body * { visibility: hidden !important; }
          .printable, .printable * { visibility: visible !important; }

          /* place printable area at top-left and size to A4 portrait */
          .printable {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            max-width: 210mm !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* remove shadows and backgrounds for accurate paper output */
          form.printable { box-shadow: none !important; border: none !important; background: transparent !important; }

          /* hide interactive controls */
          .no-print { display: none !important; }

          /* Inputs should print as underlined text fields */
          .printable input, .printable textarea, .printable select {
            border: none !important;
            border-bottom: 1px solid #000 !important;
            background: transparent !important;
            padding: 2px 0 !important;
            box-shadow: none !important;
            color: #000 !important;
            font-family: inherit !important;
            font-size: 12pt !important;
          }
          .printable input[type="file"] { display: none !important; }

          /* Tables should have clear printed borders */
          .printable table { border-collapse: collapse !important; width: 100% !important; }
          .printable th, .printable td { border: 1px solid #000 !important; padding: 6px !important; }

          /* Photo box sizing for print */
          .photo-box { width: 32mm !important; height: 36mm !important; border: 1px solid #000 !important; background: transparent !important; display: flex !important; align-items: center !important; justify-content: center !important; }

          /* ensure images scale correctly */
          .printable img { max-width: 100% !important; height: auto !important; }

          /* avoid breaking sections across pages */
          .printable section, .printable .p-4, .printable header { page-break-inside: avoid !important; }
          .page-break { page-break-after: always !important; }
        }
      `}</style>
      <form onSubmit={handleSubmit} className="border p-6 bg-white shadow-sm printable">
        <header className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
            <Image
              src="/asset/logs/logo.jpg"
              alt="School Logo"
              width={120}
              height={40}
              className="h-12 w-12"
            />
            <h2 className="text-xl text-[#843d8d] font-bold">FUTURE PODAR LEARN SCHOOL</h2>
            </div>
            
            <div className="text-sm text-gray-700">Add - Jambhali / Sadak, Taluka - Sakoli, District - Bhandara - 441802</div>
          </div>
           
        </header>
        <div>
              <h1 className="font-bold text-black">APPLICATION FORM</h1>
              <h3 className="text-red-400">Note: Please fill all the details in BLOCK letters only</h3> 
        </div>
         

        <h3 className="font-semibold mt-5 text-black mb-3">STUDENT INFORMATION</h3>

        <section className="mb-6 grid text-black grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm">First Name</label>
            <input value={form.firstName} onChange={(e)=>update("firstName", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Middle Name</label>
            <input value={form.middleName} onChange={(e)=>update("middleName", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Last Name</label>
            <input value={form.lastName} onChange={(e)=>update("lastName", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
        </section>

        <section className="mb-6 text-black grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Date of Birth</label>
            <input type="date" value={form.dob} onChange={(e)=>update("dob", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Place of Birth</label>
            <input value={form.placeOfBirth} onChange={(e)=>update("placeOfBirth", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
        </section>

        <section className="mb-6 text-black grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm">Gender</label>
            <select value={form.gender} onChange={(e)=>update("gender", e.target.value)} className="mt-1 w-full border p-2 rounded">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm">Religion</label>
            <input value={form.religion} onChange={(e)=>update("religion", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Nationality</label>
            <input value={form.nationality} onChange={(e)=>update("nationality", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
        </section>

        <section className="mb-6 text-black">
          <label className="block text-sm">Caste Category</label>
          <div className="mt-2 flex gap-4 items-center">
            <label className="inline-flex items-center"><input type="radio" name="caste" value="ST" checked={form.caste==="ST"} onChange={()=>update("caste","ST")} className="mr-2"/>ST</label>
            <label className="inline-flex items-center"><input type="radio" name="caste" value="SC" checked={form.caste==="SC"} onChange={()=>update("caste","SC")} className="mr-2"/>SC</label>
            <label className="inline-flex items-center"><input type="radio" name="caste" value="OBC" checked={form.caste==="OBC"} onChange={()=>update("caste","OBC")} className="mr-2"/>OBC</label>
            <label className="inline-flex items-center"><input type="radio" name="caste" value="OTHERS" checked={form.caste==="OTHERS"} onChange={()=>update("caste","OTHERS")} className="mr-2"/>OTHERS</label>
          </div>
        </section>

        <section className="mb-6 text-black">
          <label className="block text-sm">Address For Communication</label>
          <textarea value={form.address} onChange={(e)=>update("address", e.target.value)} className="mt-1 w-full border p-2 rounded" rows={3} />
        </section>

        <section className="mb-6 text-black grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Mobile Number</label>
            <input value={form.telephone} onChange={(e)=>update("telephone", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Latest Passport Size Colour Photograph of The Student</label>
              <div className="mt-2 flex items-center gap-4">
              <div className="w-24 sm:w-32 h-28 sm:h-36 border bg-gray-50 photo-box flex items-center justify-center text-xs text-gray-500 overflow-hidden">
                {form.photoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={form.photoDataUrl} alt="Student photo" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-gray-500">Photo</span>
                )}
              </div>
              <input type="file" accept="image/*" onChange={handlePhoto} className="no-print border p-2 rounded" />
            </div>
          </div>
        </section>
        
        {/* ---------- Second page: Parent details, health, previous school, documents ---------- */}
        <hr className="my-6" />

        <h3 className="font-semibold text-black mb-3">PARENT DETAILS</h3>
        <div className="mb-6 grid text-black grid-cols-1 md:grid-cols-2 gap-6">
          {/* Father column */}
          <div className="p-4 border rounded">
            <h4 className="font-medium mb-2">Father</h4>
              <div className="space-y-2 text-sm">
              <input placeholder="Name in full" value={form.fatherName} onChange={(e)=>update("fatherName", e.target.value)} className="w-full border p-2 rounded" />
              <input type="text" inputMode="numeric" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" value={form.fatherDob} onChange={(e)=>update("fatherDob", e.target.value)} className="w-full border p-2 rounded" title="Enter date as dd/mm/yyyy" />
              <input placeholder="Qualification" value={form.fatherQualification} onChange={(e)=>update("fatherQualification", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Mother Tongue" value={form.fatherMotherTongue} onChange={(e)=>update("fatherMotherTongue", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Designation" value={form.fatherDesignation} onChange={(e)=>update("fatherDesignation", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Office Address" value={form.fatherOfficeAddress} onChange={(e)=>update("fatherOfficeAddress", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Telephone (Res)" value={form.fatherTelephoneRes} onChange={(e)=>update("fatherTelephoneRes", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Telephone (Office)" value={form.fatherTelephoneOffice} onChange={(e)=>update("fatherTelephoneOffice", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Mobile Number" value={form.fatherMobile} onChange={(e)=>update("fatherMobile", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Email ID" value={form.fatherEmail} onChange={(e)=>update("fatherEmail", e.target.value)} className="w-full border p-2 rounded" />
            </div>
          </div>

          {/* Mother column */}
          <div className="p-4 border rounded">
            <h4 className="font-medium mb-2">Mother</h4>
              <div className="space-y-2 text-sm">
              <input placeholder="Name in full" value={form.motherName} onChange={(e)=>update("motherName", e.target.value)} className="w-full border p-2 rounded" />
              <input type="text" inputMode="numeric" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" value={form.motherDob} onChange={(e)=>update("motherDob", e.target.value)} className="w-full border p-2 rounded" title="Enter date as dd/mm/yyyy" />
              <input placeholder="Qualification" value={form.motherQualification} onChange={(e)=>update("motherQualification", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Mother Tongue" value={form.motherMotherTongue} onChange={(e)=>update("motherMotherTongue", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Designation" value={form.motherDesignation} onChange={(e)=>update("motherDesignation", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Office Address" value={form.motherOfficeAddress} onChange={(e)=>update("motherOfficeAddress", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Telephone (Res)" value={form.motherTelephoneRes} onChange={(e)=>update("motherTelephoneRes", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Telephone (Office)" value={form.motherTelephoneOffice} onChange={(e)=>update("motherTelephoneOffice", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Mobile Number" value={form.motherMobile} onChange={(e)=>update("motherMobile", e.target.value)} className="w-full border p-2 rounded" />
              <input placeholder="Email ID" value={form.motherEmail} onChange={(e)=>update("motherEmail", e.target.value)} className="w-full border p-2 rounded" />
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-black mb-3">PLEASE FILL IN THE FOLLOWING</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="w-full table-auto border-collapse text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Name of the last school attended</th>
                <th className="border px-2 py-1">Location</th>
                <th className="border px-2 py-1">Class Completed</th>
                <th className="border px-2 py-1">Years attended</th>
                <th className="border px-2 py-1">Language of Instruction</th>
                <th className="border px-2 py-1">Curriculum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1"><input value={form.prevSchoolName} onChange={(e)=>update("prevSchoolName", e.target.value)} className="w-full"/></td>
                <td className="border px-2 py-1"><input value={form.prevSchoolLocation} onChange={(e)=>update("prevSchoolLocation", e.target.value)} className="w-full"/></td>
                <td className="border px-2 py-1"><input value={form.prevClassCompleted} onChange={(e)=>update("prevClassCompleted", e.target.value)} className="w-full"/></td>
                <td className="border px-2 py-1"><input value={form.prevYearsAttended} onChange={(e)=>update("prevYearsAttended", e.target.value)} className="w-full"/></td>
                <td className="border px-2 py-1"><input value={form.prevLanguage} onChange={(e)=>update("prevLanguage", e.target.value)} className="w-full"/></td>
                <td className="border px-2 py-1"><input value={form.prevCurriculum} onChange={(e)=>update("prevCurriculum", e.target.value)} className="w-full"/></td>
              </tr>
            </tbody>
          </table>
        </div>

         

        <h3 className="font-semibold text-black mb-3">DOCUMENTS TO BE SUBMITTED (Recommended)</h3>
        <div className="mb-6 text-black grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="py-1">• Photocopy of Birth Certificate</div>
          <div className="py-1">• School Leaving Certificate (Original)</div>
          <div className="py-1">• Report Card (Original / Photocopy)</div>
          <div className="py-1">• 3 Colour passport size photographs</div>
          <div className="py-1">• Aadhar Card Copy</div>
        </div>

        <h4 className="font-semibold text-black mb-3">EMERGENCY CONTACT</h4>
        <section className="mb-6 text-black grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Name</label>
            <input value={form.emergencyName} onChange={(e)=>update("emergencyName", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Relationship</label>
            <input value={form.emergencyRelationship} onChange={(e)=>update("emergencyRelationship", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Contact number in case of emergency</label>
            <input value={form.emergencyContact} onChange={(e)=>update("emergencyContact", e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Address for emergency contact</label>
            <textarea value={form.emergencyAddress} onChange={(e)=>update("emergencyAddress", e.target.value)} className="mt-1 w-full border p-2 rounded" rows={2} />
          </div>
        </section>

        <div className="flex items-center gap-3 no-print">
          <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60">{submitting?"Submitting...":"Submit"}</button>
          <button type="button" onClick={()=>setForm(empty)} className="px-4 py-2 text-gray-800 border rounded hover:bg-gray-100">Reset</button>
          <button type="button" onClick={printForm} className="px-4 py-2 text-gray-800 border rounded hover:bg-gray-100">Print</button>
        </div>

        {message && <div className="mt-4 text-sm text-gray-800">{message}</div>}
      </form>
    </div>
  );
}
