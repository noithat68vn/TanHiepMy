import { useState, useRef, useEffect } from 'react';
import { Pencil } from 'lucide-react';

interface EditableTextProps {
  initialText: string;
  className?: string;
  multiline?: boolean;
  id?: string;
}

export default function EditableText({ initialText, className = "", multiline = false, id }: EditableTextProps) {
  const storageKey = `editable-text-${id || initialText}`;
  
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(() => {
    return localStorage.getItem(storageKey) || initialText;
  });
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    localStorage.setItem(storageKey, text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      setIsEditing(false);
      localStorage.setItem(storageKey, text);
    }
  };

  if (isEditing) {
    const commonClasses = `w-full bg-black/5 text-inherit border border-dashed border-[#C09F7A] outline-none rounded p-1 ${className}`;
    return multiline ? (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        className={commonClasses}
        rows={Math.max(3, text.split('\n').length)}
      />
    ) : (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={commonClasses}
      />
    );
  }

  return (
    <span className="group relative inline-flex items-start max-w-full align-top">
      <span className={`whitespace-pre-line ${className}`}>{text}</span>
      <button 
        onClick={() => setIsEditing(true)}
        className="ml-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-white bg-[#C09F7A] hover:bg-[#b08d66] rounded-full shadow-md shrink-0 cursor-pointer"
        title="Chỉnh sửa"
      >
        <Pencil className="w-3.5 h-3.5" />
      </button>
    </span>
  );
}
