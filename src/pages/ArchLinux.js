import { Helmet } from "react-helmet-async";

function ArchLinux() {
  return (
    <>
      <Helmet>
        <title>Arch Linux Installation - Amit Eshore</title>
      </Helmet>
      <main>
        <h1>Arch Linux Installation</h1>
        <p className="date">June 21, 2021</p>
        <p>
          This guide is exactly the same as the{" "}
          <a href="https://wiki.archlinux.org/title/installation_guide">
            official installation guide
          </a>
          , but with my preferences, so that I can copy and paste the commands
          whenever I install a new arch linux system.
        </p>
        {/*  */}
        <h2>Pre-installation</h2>
        <hr />
        <h3>Set the keyboard layout</h3>
        <pre>$ loadkeys dvorak</pre>
        <h3>Connect to the internet</h3>
        <p>
          Plug ethernet cable and check connection with <code>ping</code>.
        </p>
        <h3>Update the system clock</h3>
        <pre>$ timedatectl set-ntp true</pre>
        <h3>Partition the disks</h3>
        <p>
          Check disk information with <code>lsblk</code> or{" "}
          <code>fdisk -l</code>.
        </p>
        <pre>$ fdisk /dev/sda</pre>
        <table>
          <thead>
            <tr>
              <th>Partition</th>
              <th>Mount point</th>
              <th>Partition type</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/dev/sda1</code>
              </td>
              <td>
                <code>/boot/efi</code>
              </td>
              <td>EFI System</td>
              <td>+512MB</td>
            </tr>
            <tr>
              <td>
                <code>/dev/sda2</code>
              </td>
              <td>
                <code>[SWAP]</code>
              </td>
              <td>Linux swap</td>
              <td>+2048MB</td>
            </tr>
            <tr>
              <td>
                <code>/dev/sda3</code>
              </td>
              <td>
                <code>/mnt</code>
              </td>
              <td>Linux Filesystem</td>
              <td>Remainder of the device</td>
            </tr>
          </tbody>
        </table>
        <p>
          When done, enter <code>w</code> to write the changes to the disk and
          exit out of <code>fdisk</code>.
        </p>
        <h3>Format the partitions</h3>
        <pre>$ mkfs.fat -F 32 /dev/sda1</pre>
        <pre>$ mkswap /dev/sda2</pre>
        <pre>$ mkfs.ext4 /dev/sda3</pre>
        <h3>Mount root partitions</h3>
        <pre>$ mount /dev/sda3 /mnt</pre>
        <pre>$ swapon /dev/sda2</pre>
        {/*  */}
        <h2>Installation</h2>
        <hr />
        <h3>Select the mirrors</h3>
        <pre>$ pacman -Syy</pre>
        <p>Copy the default mirrorlist before updating:</p>
        <pre>$ cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak</pre>
        <pre>
          $ reflector -c "India" —download-timeout 60 -p http -p https —sort
          rate —save /etc/pacman.d/mirriorlist
        </pre>
        <h3>Install essential packages</h3>
        <pre>
          pacstrap /mnt base linux-lts linux-headers-lts linux-firmware neovim
          networkmanager dhcpcd git zsh sudo
        </pre>
        <h2>Configure the system</h2>
        <hr />
        <h3>Fstab</h3>
        <pre>$ genfstab -U /mnt >> /mnt/etc/fstab</pre>
        <h3>Chroot</h3>
        <pre>$ arch-chroot /mnt</pre>
        <h3>Time zone</h3>
        <pre>$ timedatectl set-timezone Asia/Kolkata</pre>
        <h3>Localization</h3>
        <p>
          Edit <code>/etc/locale.gen</code> and uncomment{" "}
          <code>en_US.UTF-8 UTF-8</code>.
        </p>
        <p>Generate the locales:</p>
        <pre>$ locale-gen</pre>
        <p>Set the LANG variable:</p>
        <pre>$ echo LANG=en_US.UTF-8 > /etc/locale.conf</pre>
        <p>Make dvorak defaul keyboard layout in virtual consoles:</p>
        <pre>$ echo KEYMAP=dvorak > /etc/vconsole.conf</pre>
        <h3>Network configuration</h3>
        <pre>$ echo your_host_name > /etc/hostname</pre>
        <p>
          Add matching entries to <code>/etc/hosts</code>:
        </p>
        <pre>
          127.0.0.1 &#9; localhost
          <br />
          ::1 &#9;&#9;&#9;&#9;&#9;&#9;&#9; localhost
          <br />
          127.0.1.1 &#9; your_host_name
        </pre>
        <h3>Root password</h3>
        <p>Set up root password:</p>
        <pre>$ passwd</pre>
        <h3>Boot loader and microcode</h3>
        <p>Install required packages:</p>
        <pre>$ pacman -S grub efibootmgr intel-ucode</pre>
        <p>Create mount point and mount the EFI partition:</p>
        <pre>$ mkdir /boot/efi</pre>
        <pre>$ mount /dev/sda1 /boot/efi</pre>
        <p>Install grub:</p>
        <pre>
          $ grub-install --target=x86_64-efi --efi-directory=/boot/efi
          --bootloader-id=GRUB
        </pre>
        <p>Generate grub configuration file:</p>
        <pre>$ grub-mkconfig -o /boot/grub/grub.cfg</pre>
        <h3>Network manager</h3>
        <pre>$ systemctl enable NetworkManager.service</pre>
        <h2>Reboot</h2>
        <hr />
        <p>
          Exit the chroot environment by running <code>exit</code>.
        </p>
        <p>
          Unmount all the partitions with <code>umount -R /mnt</code>.
        </p>
        <p>
          Restart the machine by typing <code>reboot</code>.
        </p>
        <p>Remove the installation medium before login.</p>
        <p>Btw, I use Arch.</p>
      </main>
    </>
  );
}

export default ArchLinux;
