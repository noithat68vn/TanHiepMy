import { useState, useRef } from 'react';
import { Image as ImageIcon, Type } from 'lucide-react';
import EditableText from './EditableText';

interface EditableLogoProps {
  defaultText?: string;
  className?: string;
  id?: string;
}

export default function EditableLogo({ defaultText = "WolfArch", className = "", id }: EditableLogoProps) {
  const key = id || defaultText;
  const storageModeKey = `logo-mode-${key}`;
  const storageImageKey = `logo-image-${key}`;

  const [mode, setMode] = useState<'text' | 'image'>(() => {
    return (localStorage.getItem(storageModeKey) as 'text' | 'image') || 'text';
  });
  const [imageSrc, setImageSrc] = useState<string | null>(() => {
    return localStorage.getItem(storageImageKey) || null;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const result = event.target.result as string;
          setImageSrc(result);
          setMode('image');
          localStorage.setItem(storageImageKey, result);
          localStorage.setItem(storageModeKey, 'image');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const switchToText = () => {
    setMode('text');
    localStorage.setItem(storageModeKey, 'text');
  };

  return (
    <div className={`group relative inline-flex items-center ${className}`}>
      {mode === 'text' ? (
        <div className="text-2xl font-bold tracking-wider">
          <EditableText initialText={defaultText} id={`logo-text-${key}`} />
        </div>
      ) : (
        <img src={imageSrc || ""} alt="Logo" className="max-h-12 w-auto object-contain" />
      )}

      <div className="absolute -right-8 -top-2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1 z-50">
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="p-1 text-white bg-[#C09F7A] hover:bg-[#b08d66] rounded-full shadow-md shrink-0 cursor-pointer"
          title="Tải ảnh Logo"
        >
          <ImageIcon className="w-3 h-3" />
        </button>
        {mode === 'image' && (
          <button 
            onClick={switchToText}
            className="p-1 text-white bg-gray-600 hover:bg-gray-700 rounded-full shadow-md shrink-0 cursor-pointer"
            title="Dùng Logo chữ"
          >
            <Type className="w-3 h-3" />
          </button>
        )}
      </div>
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
}
