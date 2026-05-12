type ContactCardProps = {
  name: string;
  role?: string;
  phone?: string;
  telegram?: string;
  vk?: string;
};

export default function ContactCard({
  name,
  role,
  phone,
  telegram,
  vk,
}: ContactCardProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[16px] lg:text-[18px] leading-[1.2] mb-[12px] font-semibold">
        {name}
      </h3>

      {role && (
        <p className="text-[13px] lg:text-[15px] leading-[1.4] mb-[20px]">
          {role}
        </p>
      )}

      <div className="flex flex-col gap-1 text-[13px] lg:text-[15px]">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="!no-underline hover:underline transition-all opacity-50"
          >
            {phone}
          </a>
        )}

        {telegram && (
          <a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="!no-underline hover:underline transition-all opacity-50"
          >
            Telegram
          </a>
        )}

        {vk && (
          <a
            href={vk}
            target="_blank"
            rel="noopener noreferrer"
            className="!no-underline hover:underline transition-all opacity-50"
          >
            ВКонтакте
          </a>
        )}
      </div>
    </div>
  );
}